import Header from '../components/Header';
import ContentSection from '../components/ContentSection';

export default function Home () {


  return (
    <div>
      <Header />
      <main className="px-4 py-4 mt-0 bg-blue-100">
        <ContentSection />
      </main>
    </div>
  );
};

