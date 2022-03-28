import Layout from "./components";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            source="https://avatars.githubusercontent.com/u/13208366?v=4"
            alt="User Avatar" srcset="" />
          <h1>Marcelo de Carvalho Santana</h1>
          <h3>Username: </h3>
          <span>marceloscientist</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starred</h4>
              <span>15</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>37</span>
            </div>

          </div>


        </div>

      </Layout>
    </main>
  );
}

export default App;
