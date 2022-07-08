import { Routes, Route, } from "react-router-dom";
import {HomeFeature, BlogFeature} from '../../features'

export const AppRouter = () => (
    <Routes>
          <Route path="/" element={<HomeFeature/>}></Route>
          <Route path="/blog"element={<BlogFeature/>}></Route>
   </Routes>

)