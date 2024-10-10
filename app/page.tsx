import BlogList from '@/components/blog-list';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My Blog</h1>
      <div className="flex items-center space-x-2 mb-8 max-w-md mx-auto">
        <Input type="text" placeholder="Search blogs..." className="flex-grow" />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <BlogList />
    </div>
  );
}