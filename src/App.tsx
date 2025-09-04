import { NextUIProvider } from '@nextui-org/react';
import { StrictMode } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import BaselineInterface from './study/BaselineInterface';
import StudyInterface from './study/StudyInterface';
import { useStudyStore } from './study/StudyModel';
import Launcher from './view/Launcher';
import VisualWritingInterface from './view/VisualWritingInterface';



function App() {

  const router = createHashRouter([
    {
      path: 'free-form',
      loader: () => {
        useStudyStore.getState().setIsDataSaved(false);
        return null;
      },
      element: <VisualWritingInterface />
    },
    {
      path: 'study',
      element: <StudyInterface />
    },
    {
      path: 'baseline',
      element: <BaselineInterface />
    },
    {
      path: '/',
      element: <Launcher />
    }
  ],
  /*{
    basename: import.meta.env.BASE_URL
  }*/
);

  return (
    <>
      <StrictMode>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <RouterProvider router={router} />
          </main>
        </NextUIProvider>
      </StrictMode>
    </>
  )
}

export default App
