import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx'
import About from './pages/About.tsx'
import Gallery from './pages/Gallery.tsx'

export default function App() {
  return (
<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Gallery />} />
      <Route path="about" element={<About/>}/> 
    </Route>
  </Routes>
  )
  
}