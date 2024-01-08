import React from 'react'
import Home from './Pages/Home';
import{Footer, Blog,  Header, Education, Features, Body, Bottom, Research,Product, ProfessionalEd, PatientEd,HelpDocument,RelatedCourses,FacultyResources,CaseStudies,StudentResources, Brushes, ElectricalAccessories, ToothPaste, SpForKids} from './Containers';
import{ About, Navbar, Products} from './Components';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import  Contacts  from './Pages/Contacts';

const App = () => {
  return (
    <div className="App">
    <Navbar/>

<div> 
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/education' element={<Education/>}></Route>
<Route path= '/research' element={<Research/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path ='/education/professionalEd' element={<ProfessionalEd/>}></Route>
<Route path ='/education/patientEd' element={<PatientEd/>}></Route>
<Route path ='/education/professionalEd/helpDocuments' element={<HelpDocument/>}></Route>
<Route path ='/education/professionalEd/relatedCourses' element={<RelatedCourses/>}></Route>
<Route path ='/education/professionalEd/facultyResources' element={<FacultyResources/>}></Route>
<Route path ='/education/professionalEd/caseStudies' element={<CaseStudies/>}></Route>
<Route path ='/education/professionalEd/studentResources' element={<StudentResources/>}></Route>
<Route path='/product/brushes' element={<Brushes/>}></Route>
<Route path='/product/electricalAccessories' element={<ElectricalAccessories/>}></Route>
<Route path='/product/toothPaste' element={<ToothPaste/>}></Route>
<Route path='/product/spForKids' element={<SpForKids/>}></Route>
<Route path='/contacts' element={<Contacts/>}></Route>

  </Routes>
    </div>
    <Bottom/>
    </div>
  )
}

export default App
