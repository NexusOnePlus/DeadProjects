import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon } from "lucide-react"

interface Author {
  name?: string;
  image?: string;
}

interface CardProps {
  title?: string;
  imageUrl?: string;
  content?: string;
  authors?: Author[];
  readTime?: string;
}

export default function FeaturedCard({
  title = "Featured Article",
  imageUrl,
  content = "No content available",
  authors = [],
  readTime = "Unknown"
}: CardProps = {}) {
  return (
    <Card className="w-[350px] bg-gray-900 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <ImageIcon className="w-full h-full text-gray-600" />
          )}
        </div>
        <p className="text-sm text-gray-300">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {authors ? ( authors.slice(0, 3).map((author, index) => (
            <Avatar key={index} className="border-2 border-gray-900">
              <AvatarImage src={author.image} alt={author.name} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
          ))):
          <Avatar  className="border-2 border-gray-900">
          <AvatarImage src={'/placeholder.svg?height=32&width=32'} alt={'unknown'} />
          <AvatarFallback>A1</AvatarFallback>
        </Avatar>
          }
        </div>
        <span className="text-xs text-gray-400">{readTime} duró...</span>
      </CardFooter>
    </Card>
  )
}