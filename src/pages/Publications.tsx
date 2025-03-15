
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  FileText, 
  Book, 
  Presentation, 
  ExternalLink,
  Tag, 
  Calendar,
  Filter
} from "lucide-react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { publications } from "@/lib/publications";

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [tagFilter, setTagFilter] = useState<string>("all");
  
  // Get unique years, types, and tags for filters
  const years = useMemo(() => {
    const uniqueYears = new Set(publications.map(pub => pub.year.toString()));
    return Array.from(uniqueYears).sort((a, b) => parseInt(b) - parseInt(a));
  }, []);
  
  const types = useMemo(() => {
    const uniqueTypes = new Set(publications.map(pub => pub.type));
    return Array.from(uniqueTypes);
  }, []);
  
  const tags = useMemo(() => {
    const uniqueTags = new Set(publications.flatMap(pub => pub.tags));
    return Array.from(uniqueTags);
  }, []);
  
  // Filter publications based on search and filters
  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === "" || 
        pub.title.toLowerCase().includes(searchLower) || 
        pub.authors.toLowerCase().includes(searchLower) || 
        pub.venue.toLowerCase().includes(searchLower);
      
      // Year filter
      const matchesYear = yearFilter === "all" || pub.year.toString() === yearFilter;
      
      // Type filter
      const matchesType = typeFilter === "all" || pub.type === typeFilter;
      
      // Tag filter
      const matchesTag = tagFilter === "all" || pub.tags.includes(tagFilter);
      
      return matchesSearch && matchesYear && matchesType && matchesTag;
    });
  }, [searchQuery, yearFilter, typeFilter, tagFilter]);
  
  // Group publications by year for the chronological view
  const publicationsByYear = useMemo(() => {
    const grouped: Record<string, typeof publications> = {};
    
    filteredPublications.forEach(pub => {
      const year = pub.year.toString();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(pub);
    });
    
    // Sort years in descending order
    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
      .map(([year, pubs]) => ({
        year,
        publications: pubs
      }));
  }, [filteredPublications]);
  
  // Group publications by type for the categorized view
  const publicationsByType = useMemo(() => {
    const grouped: Record<string, typeof publications> = {};
    
    filteredPublications.forEach(pub => {
      if (!grouped[pub.type]) {
        grouped[pub.type] = [];
      }
      grouped[pub.type].push(pub);
    });
    
    return Object.entries(grouped).map(([type, pubs]) => ({
      type,
      publications: pubs
    }));
  }, [filteredPublications]);
  
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Publications</h1>
        
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search Publications
                  </label>
                  <Input
                    id="search"
                    placeholder="Search by title, author, or venue..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Filter by Year
                    </label>
                    <Select value={yearFilter} onValueChange={setYearFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        {years.map(year => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Filter by Type
                    </label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {types.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Filter by Tag
                    </label>
                    <Select value={tagFilter} onValueChange={setTagFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Tags" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tags</SelectItem>
                        {tags.map(tag => (
                          <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {filteredPublications.length} publications found
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery("");
                      setYearFilter("all");
                      setTypeFilter("all");
                      setTagFilter("all");
                    }}
                    className="text-sm"
                  >
                    <Filter size={14} className="mr-1" />
                    Reset Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="chronological" className="mb-10">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="chronological" className="flex-1">
              <Calendar size={16} className="mr-2" />
              Chronological
            </TabsTrigger>
            <TabsTrigger value="categorized" className="flex-1">
              <Tag size={16} className="mr-2" />
              By Type
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chronological">
            <div className="space-y-10">
              {publicationsByYear.map(({ year, publications }) => (
                <div key={year}>
                  <h2 className="text-xl font-bold mb-4 bg-gray-100 p-2">{year}</h2>
                  <ul className="space-y-6">
                    {publications.map((pub, index) => (
                      <PublicationItem key={index} publication={pub} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="categorized">
            <div className="space-y-10">
              {publicationsByType.map(({ type, publications }) => (
                <div key={type}>
                  <h2 className="text-xl font-bold mb-4 bg-gray-100 p-2">{type}</h2>
                  <ul className="space-y-6">
                    {publications.map((pub, index) => (
                      <PublicationItem key={index} publication={pub} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface PublicationItemProps {
  publication: (typeof publications)[0];
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  return (
    <li className="border-b pb-4">
      <h3 className="font-medium">{publication.title}</h3>
      <p className="text-gray-700 text-sm">{publication.authors}</p>
      <p className="text-gray-600 text-sm italic">
        {publication.venue}, {publication.year}
      </p>
      
      {publication.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {publication.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="mt-2 flex flex-wrap gap-3">
        {publication.pdf && (
          <a 
            href={publication.pdf} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={14} />
            <span>PDF</span>
          </a>
        )}
        {publication.doi && (
          <a 
            href={`https://doi.org/${publication.doi}`} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Book size={14} />
            <span>DOI</span>
          </a>
        )}
        {publication.slides && (
          <a 
            href={publication.slides} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Presentation size={14} />
            <span>Slides</span>
          </a>
        )}
        {publication.link && (
          <a 
            href={publication.link} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} />
            <span>Link</span>
          </a>
        )}
      </div>
    </li>
  );
};

export default Publications;
