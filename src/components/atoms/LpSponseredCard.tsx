import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

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
        <img src={logo} alt={name} height={200} width={200} />
        <CardContent>{name}</CardContent>
      </CardActionArea>
    </Card>
  );
}
