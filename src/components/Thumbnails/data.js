import tjetakKnowledgePhoto from '../../assets/images/thumbnails/tjetak_knowledge.jpg';
import tjetakKnowledgeSkeleton from '../../assets/images/thumbnails/tjetak_knowledge_skeleton.jpg';
import bogorSehatPhoto from '../../assets/images/thumbnails/bogorsehat.jpg';
import bogorSehatSkeleton from '../../assets/images/thumbnails/bogorsehat_skeleton.jpg';

const data = [
  {
    photo: tjetakKnowledgePhoto,
    skeleton: tjetakKnowledgeSkeleton,
    to: '/tjetak-knowledge',
    title: 'Tjetak Knowledge',
    description: 'Tjetak Knowledge is a Knowledge Management System designed for the entire company of Tjetak.',
    createdDate: 'May 3rd, 2020'
  },
  {
    photo: bogorSehatPhoto,
    skeleton: bogorSehatSkeleton,
    to: '/bogorsehat',
    title: 'Bogor Sehat',
    description: 'To help Indonesia enhance their health quality, my team and I designed a mobile health application for citizen of Bogor.',
    createdDate: 'November 22nd, 2019'
  }
]

export default data;