import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import {
	Experience,
	PageInfo,
	Project,
	Skill,
	Social

} from '../typings';

process.env.NEXT_PUBLIC_SANITY_DATASET = 'production';
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'fjk1zery';

jest.mock('next-sanity', () => ({
  createClient: jest.fn(() => ({
    // Mock methods and properties as needed
  })),
  groq: jest.fn(),
}));

jest.mock('@sanity/image-url', () => {
  return {
    __esModule: true, // This is required for mocking modules with default exports
    default: () => ({
      image: () => ({
        url: () => 'https://cdn.sanity.io/images/fjk1zery/production/c225ef6ee4df3d8e1a4e59b3eda24147ced3520e-716x1080.jpg', // Return a mock URL string
      }),
    }),
  };
});




// Mock Data
const mockPageInfo: PageInfo = {
	_rev: 'rev',
	phoneNumber: 'phone',
	_id: 'idstring',
	_type: 'PageInfo', // Add this line to match the PageInfo type definition
	aboutImage: {
		_type: 'image',
		asset: {
			_ref: 'ref',
			_type: 'reference',
		},
	},

	address: 'Address',
	_updatedAt: '2023-11-17T19:19:54Z',
	email: 'email',
	role: 'role',
	about: 'about',
	heroImage: {
		asset: {
			_ref: 'image-58396f0f2183f8f05eebc40b28623d08819c744a-1138x1707-jpg',
			_type: 'reference',
		},
		_type: 'image',
	},
	typewriter: ['text1', 'text2', 'tex3'],
	_createdAt: '2022-11-27T00:54:52Z',
	name: 'Name',
};

const mockExperience: Experience[] = [
	{
		_createdAt: '2022-11-27T00:59:14Z',
		// Assuming companyImage has a url property for simplicity
		companyImage: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
		_rev: 'exampleRev1',
		_type: 'experience',
		points: ['Example point 1', 'Example point 2'],
		technologies: [{ name: 'Tech 1' }, { name: 'Tech 2' }],
		dateStarted: '2019-11-01',
		isCurrentlyWorkingHere: true,
		company: 'Example Company 1',
		_updatedAt: '2023-12-05T18:01:01Z',
		linkToWebsite: 'https://example.com',
		_id: 'exampleId1',
		jobTitle: 'Example Job Title 1',
	},
];
const mockSkills: Skill[] = [
	{
		_type: 'skill',
		title: 'title',
		_rev: 'rev',
		_id: 'idstring',
		_updatedAt: '2023-11-14T16:06:54Z',
		order: 9,
		smallImage: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
		image: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
		skillType: 'framework',
		_createdAt: '2023-11-13T19:28:32Z',
	},
	{
		_type: 'skill',
		title: 'title',
		_rev: 'rev',
		_id: 'idstring',
		_updatedAt: '2023-11-14T16:06:54Z',
		order: 9,
		smallImage: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
		image: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
		skillType: 'skilltype',
		_createdAt: '2023-11-13T19:28:32Z',
	}
];

const mockProjects: Project[] = [
  {
    linkToGithub: 'https://github.com/Patrickcpoole/venU2.0',
    _id: '23091a37-c8de-4b5e-b055-11fb73e1e0e4',
    title: 'VenU',
    _updatedAt: '2023-12-04T03:57:05Z',
    _rev: 'xCSODBmVyiE5qImyLTRTmt',
    _type: 'project',
    summary: 'A live music app designed to change how users find shows online. Instead of searching for a specific artists, users can view upcoming artists at music venues where they live. The app is also connected to the Spotify API so users can listen to each artist to get a taste of what the concert might be like. There are also several CRUD features such as saving and viewing specific events that they are interested in attending. ',
    image: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
    technologies: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    linkToBuild: 'https://master.d984mngke5ikm.amplifyapp.com/',
    _createdAt: '2023-11-17T21:15:28Z'
  },
  {
    image: {
			_type: 'image',
			asset: {
				_ref: 'exampleRef',
				_type: 'reference',
			},
		},
    summary: "A web application for Street Honey, a film photography brand, using Next.js—a React framework known for server-side rendering and enhanced performance. The backend is powered by Sanity Composable Content Cloud a state-of-the-art headless CMS. The initial purpose of the site was to sell licensed prints and merchandise direct-to-consumer. Although print sales have ceased, the site remains connected to a test version of Stripe's API, allowing users to experience the checkout process. ",
    technologies: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    linkToGithub: 'https://github.com/Patrickcpoole/street-honey',
    linkToBuild: 'https://www.streethoney.co/',
    _id: '716602a0-24cf-4b11-962b-f21886b0a67c',
    title: 'title',
    _createdAt: '2023-11-17T05:28:32Z',
    _updatedAt: '2023-11-17T06:02:21Z',
    _rev: 'kKZ8yWBgonvfDRoPOxamsL',
    _type: 'project'
  }
];
const mockSocials: Social[] = [
  {
    _updatedAt: '2023-11-14T00:25:59Z',
    url: 'url',
    _createdAt: '2022-11-27T01:01:59Z',
    _rev: 'rev',
    _type: 'social',
    _id: 'idstring',
    title: 'title'
  },
  {
    _updatedAt: '2023-11-14T00:26:04Z',
    url: 'url',
    _createdAt: '2023-11-14T00:25:28Z',
    _rev: 'rev',
    _type: 'social',
    _id: 'idstring',
    title: 'title'
  }
];

describe('Home Component', () => {
	it('renders Home page with correct props', () => {
		render(
			<Home
				pageInfo={mockPageInfo}
				experience={mockExperience}
				skills={mockSkills}
				projects={mockProjects}
				socials={mockSocials}
			/>
		);

		const heroSection = screen.getByTestId('hero'); 
		expect(heroSection).toBeInTheDocument();

    const aboutSection = screen.getByTestId('about');
    expect(aboutSection).toBeInTheDocument();


    const experienceSection = screen.getByTestId('experience');
    expect(experienceSection).toBeInTheDocument();

    const projectsSection = screen.getByTestId('projects');
    expect(projectsSection).toBeInTheDocument();

    // Test for Experience section
    const skillsSection = screen.getByTestId('skills');
    expect(skillsSection).toBeInTheDocument();

    const contactSection = screen.getByTestId('contact');
    expect(contactSection).toBeInTheDocument();

	});

  


});
