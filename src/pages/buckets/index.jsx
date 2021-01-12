import Nav from "../../components/nav";
import Create from "../../components/create";
import Table from "../../components/table";


function BucketPage () {
    return (
      <div>
        {/* Navigation Bar  */}
        <Nav />

        {/* Main content body  */}

        <main class="container __margin--ylg">
          {/* Add new Bucket Section  */}
          <Create label="Create New Bucket" />

          {/* Buckets table */}
          <div className="section table __shadow--sm">
            <Table />
          </div>
        </main>
      </div>
    );
}

export default BucketPage