
// console.log('hello')

// alert('hello') // browser feature


// console.log({process})

import {readFile, writeFile} from 'node:fs/promises';


const url = new URL('template.html', import.meta.url) 


    let template = await readFile(url, 'utf-8');

    const data = {
        title: 'learn node js',
        body:'this is the final html'
    }
    console.log({template})


    for(const [k, v] of Object.entries(data)){

        template = template.replace(`{${k}}`, v)
    };

    await writeFile(url, template);
