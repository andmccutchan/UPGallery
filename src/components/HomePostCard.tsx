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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HomePostCardProps = {
  title: string;
  distribution: string;
  description: string;
  image: string;
  //   images: Array<string>;
  //   profilePhoto: string;
  //   userName: string;
};

const HomePostCard = ({
  title,
  description,
  distribution,
  image,
}: //   images,
//   profilePhoto,
//   userName,
HomePostCardProps) => {
  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{distribution}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <p className="mb-2">{description}</p>
          <Carousel>
            <CarouselContent>
              {/* {images.map((_, index) => (
                <CarouselItem key={index}>
                  <img className="rounded-sm" src={images[index]} />
                </CarouselItem>
              ))} */}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </CardContent>
      <CardFooter>
        {/* <div className="flex w-full items-center">
          <Avatar>
            <AvatarImage src={profilePhoto} />
            <AvatarFallback />
          </Avatar>
          <p className="px-2">{userName}</p>
        </div> */}
      </CardFooter>
    </Card>
  );
};

export default HomePostCard;
