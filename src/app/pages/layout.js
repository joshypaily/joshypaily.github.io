
// export default function DashboardLayout({
//   children, // will be a page or nested layout
// }) {
//   return (
//     <section>
//       <h1>pages layout</h1>
//       {/* Include shared UI here e.g. a header or sidebar */}
//       SUB layout
//       {/* <Header title="Joshy Paily- Senior Software enginner" /> */}

import Header from "@/component/Header";

  
 
//       {children}
//     </section>
//   )
// }

export default function DashboardLayout({ children }) {
  return <section>
    <Header title="Joshy Paily- Senior Software enginner" />
    {children}
    </section>
}