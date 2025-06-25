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

type HomePostCardProps = {
  distro: string;
  description: string;
  images: [];
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
        <p>footer</p>
      </CardFooter>
    </Card>
  );
};

export default HomePostCard;
