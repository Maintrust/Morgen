// import React from 'react';
// import { Admin, Resource, List, Datagrid, TextField, EmailField } from 'react-admin';
// // import jsonServerProvider from 'ra-data-json-server';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="users" list={UserList} />
//   </Admin>
// );
// const UserList = () => (
//   <List>
//     <Datagrid rowClick="edit">
//       <TextField source="id" />
//       <TextField source="name" />
//       <TextField source="username" />
//       <EmailField source="email" />
//       <TextField source="address.street" />
//       <TextField source="phone" />
//       <TextField source="website" />
//       <TextField source="company.name" />
//     </Datagrid>
//   </List>
// );
// export default App;