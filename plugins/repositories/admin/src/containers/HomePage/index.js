/*
 *
 * HomePage
 *
 */

// import React, { memo } from 'react';
// // import PropTypes from 'prop-types';
// import pluginId from '../../pluginId';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>{pluginId}&apos;s HomePage</h1>
//       <p>Happy coding</p>
//     </div>
//   );
// };

// export default memo(HomePage);
// S>----------------------------------------------------------------------------------------<//

import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import axios from "axios";
import createStrapi from "strapi";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;
const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/React-avancado/repos")
      .then((res) => setRows(res.data))
      .catch((e) =>
        createStrapi.notification.error(`Ops...github API error, ${e}`)
      );
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories" }}
        content="A list of our repositories in React Avançado course."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
