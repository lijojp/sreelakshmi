import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const index = async (req, res) => {
    // console.log(req.query.username);
    // console.log(req.query.password);
    
    if(req.query.username=== "sreelakshmi@gmail.com" && req.query.password==="1234"){
        res.render('adminProducts')

    }else
    res.render('pages-login');
}
