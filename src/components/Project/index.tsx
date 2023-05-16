import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectLink,
  ProjectLinks,
  ProjectImg,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub,  } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { userData } from "@/utils/userData";
import { projects } from "@/utils/projectData";
import { ProjectIcons } from "./ProjectIcons";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        projects?.map?.((project) => (
          <ProjectWrapper key={project.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {project.name}
            </ProjectTitle>
            <ProjectImg src={project.img} alt=""/>
            <ProjectStack>
              <Text type="body2" color="grey2" css={{ display: "flex", gap: "1rem" }}>
                Tecnologias utilizadas:
                {project.techs.map(tech=>(
                  <ProjectIcons key={Math.random()} icon={tech.img} />
                ))}
              </Text>
            </ProjectStack>
            <ProjectLinks>
              <ProjectLink target="_blank" href={project.gitLink}>
                <FaGithub /> código no github
              </ProjectLink>
              <ProjectLink target="_blank" href={project.appLink}>
                <AiOutlineLink /> ver app
              </ProjectLink>
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
