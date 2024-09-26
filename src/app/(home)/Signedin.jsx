'use client'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import Link from "next/link"




export default function ProductGrid() {

    const [products,setPro] = useState([])

  useEffect(()=>{

    let url = 'https://api.sheety.co/142243bfeab83334518c518a9f7ec2ae/prodcut/sheet1';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
  
    console.log(json.sheet1);
    setPro(json.sheet1)
    });

  },[])



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Brand New Tshirts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.pid} className="overflow-hidden">
            <Link href={`/${product.pid}`}>
            <Image
              src={product.img}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-47"
            />
            </Link>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.sd}</p>
              <p className="text-lg font-bold text-primary">₹{product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}