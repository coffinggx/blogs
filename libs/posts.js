import fs, { readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
const postDirectory = path.join(process.cwd(), 'posts')
console.log(postDirectory)
export function getSortedData(){
    const fileNames = fs.readdirSync(postDirectory)
    const allPostsData = fileNames.map((fileName) =>{
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postDirectory, fileName)
        console.log(fullPath)

        const fileContent = readFileSync(fullPath, 'utf-8')

        const matterResult = matter(fileContent)
        return{
            id ,
            ...matterResult.data
        }

        
    })
    return allPostsData.sort((a,b) =>{
        if (a.date > b.date){
            return 1
        } else{
            return -1;
        }
    })
}
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

  
  export async function getPostData(id) {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }
  
  