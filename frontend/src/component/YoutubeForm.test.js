import React from 'react';
// import { renderHook } from '@testing-library/react-hooks';
import YoutubeForm from './YoutubeForm';
import { YoutubeVidContextProvider } from '../contexts/YoutubeVidContext';
import { render, screen } from '@testing-library/react';


// test('it should render the title that is passed to it', () => {
//   render(<YoutubeForm />, { wrapper: YoutubeVidContextProvider });
// //   const headerElement = screen.getByText(/video recommendation/i);
// //   expect(headerElement).toBeInTheDocument();
// });
const UserContext = React.createContext();
function renderUserGreeter(user) {
  return render(
    <UserContext.Provider value={user}>
      <YoutubeForm />
    </UserContext.Provider>
  );
}

test("UserGreeter salutes an anonymous user", () => {
  renderUserGreeter(null);
  expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
});

test("UserGreeter salutes a user", () => {
  const user = { name: "Giorgio" };
  renderUserGreeter(user);
  expect(screen.getByText(`Hello ${user.name}!`)).toBeInTheDocument();
});