import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { PrintDrawer } from "@/components/print-drawer";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { MailIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";

// Add this helper function before the Page component
const formatLinksForCommandMenu = (links: typeof RESUME_DATA.contact.social) => {
  return links.map(link => ({
    url: link.url,
    title: link.name
  }));
};

export default function Page() {
  return (
    <>
      <ThemeToggle />
      <main className="container relative mx-auto max-w-[900px] p-4 py-[15vh]">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <Button className="h-8 w-8" variant="outline" size="icon">
                    <MailIcon className="h-4 w-4" />
                  </Button>
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="inline-flex"
                >
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <Avatar className="h-28 w-[149px] overflow-hidden">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section className="mt-12">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section className="mt-8">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company} className="mt-4 border-none">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>

                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-muted-foreground">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none text-muted-foreground">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs text-muted-foreground">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>

        <Section className="mt-8">
          <h2 className="text-xl font-bold">Education</h2>
          <div className="flex flex-col gap-4 mt-4">
            {RESUME_DATA.education.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      <a 
                        href={education.url} 
                        target="_blank" 
                        className="hover:underline"
                      >
                        {education.school}
                      </a>
                    </h3>
                    <div className="text-sm tabular-nums text-muted-foreground">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs text-muted-foreground">
                  {education.degree}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="mt-8">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1 mt-4">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="mt-12 print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </main>
      
      <PrintDrawer />
      <CommandMenu links={formatLinksForCommandMenu(RESUME_DATA.contact.social)} />
    </>
  );
}
