'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ProductPage({params}) {

    

  
    const [item,setItem] = useState({})

    useEffect(()=>{

        const id = params.slug

        let url = 'https://api.sheety.co/142243bfeab83334518c518a9f7ec2ae/prodcut/sheet1';
        fetch(url)
        .then((response) => response.json())
        .then(json => {
      
        console.log(json.sheet1);

        const news = json.sheet1.filter(e=>e.pid == id)

        console.log(news)
        setItem(news[0])
  
        
        });
    
      },[])
  

  return (

    <>
     {
        item && ( <div className="max-w-6xl mx-auto p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="aspect-square relative">
                <Image
                  src={item.img}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">₹{item.price}</span>
                  
                </div>
                <p className="text-gray-600">
                 {item.sd}
                </p>
             
                <div className="flex gap-4 mt-4">
                  <Button size="lg">Add to Cart</Button>
    
                </div>
              </div>
            </div>
          </div>)
     }
    </>
   
  )
}