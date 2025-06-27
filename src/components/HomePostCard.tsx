import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

type HomePostCardProps = {
  distro: string;
  description: string;
  images: string[];
};

const HomePostCard = ({ distro, description, images }: HomePostCardProps) => {
  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle>{distro}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <Carousel>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img className="rounded-sm" src={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </CardContent>
      <CardFooter>
        {}
        <Badge className="bg-slate-500">{distro}</Badge>
      </CardFooter>
    </Card>
  );
};

export default HomePostCard;
