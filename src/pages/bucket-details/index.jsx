import Nav from "../../components/nav";
import Create from "../../components/create";
import Table from "../../components/table";


function BucketDetails() {
    return (
      <div>
        {/* Navigation Bar */}
        <Nav />

        {/* Main Content Body */}
        <main className="container __margin--ylg">
          {/* Add Item */}
          <Create extra label="Add New Item" />

          {/* Item Table */}
          <section className="section table __shadow--sm">
            <Table />
          </section>

          {/* Item Table Completed */}
          <section className="section table table--success __shadow--sm">
            {/* Table success */}
            <Table />
          </section>
        </main>
      </div>
    );
}

export default BucketDetails