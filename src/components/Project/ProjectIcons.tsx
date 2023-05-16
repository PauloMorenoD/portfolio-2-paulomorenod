import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface ProjectProps {
  icon: string | IconType;
  key: number;
}

export const ProjectIcons = (
  {  icon: Icon }: ProjectProps,
  key: number
): JSX.Element => {

  return (
    <StackCard className={`${key}`} key={key}>
        <Icon size={25} color="#868E96" />
    </StackCard>
  );
};