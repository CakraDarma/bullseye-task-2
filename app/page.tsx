import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { containerClasses, linkClasses, sectionBodyClasses } from 'components/styles';

export default function Home() {
	return (
		<div>
			<main className="bg-slate-950">
				<div className="flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10 mt-20`}>
						<SectionTitle big accentText="Hi there! I'm">
							Cakra Darma
						</SectionTitle>

						<div className="h-4 sm:h-0"></div>

						<div className={sectionBodyClasses}>
							<LinkToSection title="About Me" href="about">
								Full-time Frontend Developer with a Bachelor's Degree in Information Technology from
								Udayana University
							</LinkToSection>

							<LinkToSection title="Portfolio" href="projects">
								Experienced in building web applications using React, Next.js, Tailwind CSS, and
								more
							</LinkToSection>

							<LinkToSection title="Contact" href="contact">
								Contact Me
							</LinkToSection>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							I’m a Frontend Developer who enjoys building clean, responsive, and user-friendly
							interfaces. I focus on turning designs into real, functional products with attention
							to detail.
						</p>
						<p>
							I have experience working with modern technologies like React, Next.js, and Tailwind
							CSS. I also care about performance, maintainable code, and creating smooth user
							experiences.
						</p>
						<p>
							Recently, I’ve been exploring deeper into frontend architecture and starting to learn
							DevOps to better understand the full development flow.
						</p>
						<p>
							Outside of coding, I enjoy learning new things, improving my skills consistently, and
							keeping up with the latest trends in web development.
						</p>
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="02">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I'm always working on something new. Below are a few of my favorite projects!</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="03">
						Contact Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>Please feel free to reach out.</p>
					</div>
					<div className="font-mono text-slate-400 sm:text-lg md:text-xl mt-4 md:mt-6">
						<a className={linkClasses} href="mailto:baguscakraa02@gmail.com" target="_blank">
							Email
						</a>{' '}
						·{' '}
						<a className={linkClasses} href="https://github.com/cakradarma" target="_blank">
							Github
						</a>{' '}
						·{' '}
						<a
							className={linkClasses}
							href="https://www.linkedin.com/in/cakradarma/"
							target="_blank"
						>
							Linkedin
						</a>
					</div>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>
			</main>
		</div>
	);
}
