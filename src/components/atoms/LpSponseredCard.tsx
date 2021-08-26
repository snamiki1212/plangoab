import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "next/image";

type Collaboration = {
  name: string;
  link: string;
  logo: string;
};
type Props = {
  collaboration: Collaboration;
};

export function LpSponseredCard({ collaboration }: Props) {
  const { name, logo } = collaboration;
  return (
    <Card>
      <CardActionArea>
        <Image src={logo} alt={name} height={200} width={200} />
        <CardContent>{name}</CardContent>
      </CardActionArea>
    </Card>
  );
}