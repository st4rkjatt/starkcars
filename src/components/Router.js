
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<Home />}>
         
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}