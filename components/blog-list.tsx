"use client"

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, a powerful React framework.',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    date: 'May 15, 2023',
    tags: ['Next.js', 'React', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Mastering TypeScript',
    excerpt: 'Dive deep into TypeScript and learn how to write more robust and maintainable code.',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    date: 'June 2, 2023',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    title: 'The Power of Tailwind CSS',
    excerpt: 'Discover how Tailwind CSS can revolutionize your styling workflow and boost productivity.',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    date: 'June 20, 2023',
    tags: ['CSS', 'Tailwind', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    title: 'Responsive Web Design Techniques',
    excerpt: 'Explore the latest techniques for creating responsive and mobile-friendly websites.',
    author: {
      name: 'Sarah Brown',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    date: 'July 5, 2023',
    tags: ['Responsive Design', 'CSS', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  },
  {
    id: 5,
    title: 'Introduction to GraphQL',
    excerpt: 'Learn the basics of GraphQL and how it can improve your API development process.',
    author: {
      name: 'Alex Turner',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    date: 'July 18, 2023',
    tags: ['GraphQL', 'API', 'Backend'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',
  },
];

export default function BlogList() {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMore = () => {
    setVisiblePosts((prevVisible) => Math.min(prevVisible + 3, blogPosts.length));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.slice(0, visiblePosts).map((post) => (
        <Card key={post.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-48">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-1">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
      {visiblePosts < blogPosts.length && (
        <div className="col-span-full text-center mt-6">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
}