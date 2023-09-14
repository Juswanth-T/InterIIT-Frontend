import Header from '../components/Header';
import ContentSection from '../components/ContentSection';

export default function Home () {

  // const saveToLocalStorage = () => {
  //   localStorage.setItem(token);
  // };

  // const clearLocalStorage = () => {
  //   localStorage.removeItem(token);
  // };

  // const handleBeforeUnload = () => {
  //   clearLocalStorage();
  // };

  // window.addEventListener('beforeunload', handleBeforeUnload);

  return (
    <div>
      <Header />
      <main className="px-4 py-8  bg-blue-100">
        <ContentSection />
      </main>
    </div>
  );
};

