// 1. Savo nuožiūra sukurti IT projekto objekto tipą;
// 2. Objektas turi turėti property "projectType" kuris gali būt "IN_HOUSE" arba "OUTSOURCE"
// 3. Projektas turi turėt property "location" tai turi būt objektas kuris susideda iš "country", "city", "address";
// 4. Atskirai apsirašyti UserType (savo nuožiūra) bei sukurti kelis user kintamuosius;
// 5. Prie project tipo pridėt property "contributors" kuris masyvas susidedantis iš apsirašytu useriu;
// 6. Sukurti projekto kintamąjį bei panaudoti apsirašytą tipą;
// 7. Sukurti kintamąjį projects kuris masyvas susidedantis iš projektų;
// 8. Parašyt funkciją addItemToChart kuriai yra paduodamas prekės pavadinimas bei kainą. 
// 9. Sukuti produkto tipą. Produktui turi būt priskirtas produkto tipas pačioje funkcijoje; (Vygdyt destrukturizaciją);
// 10. Projektui sukurti tsc konfiguraciją. Pertvarkyt projektą, kad tiktu reikšmės:
// "target": "es2016",
// "module": "es2015",  
// "outDir": "./public",
// "rootDir": "./"

type AddressType = {
  country: string;
  city: string;
  street: string;
}

// 3. Projektas turi turėt property "location" tai turi būt objektas kuris susideda iš "country", "city", "address";
type LocationType = {
  country: string;
  city: string;
  address: string;
}

// 4. Atskirai apsirašyti UserType (savo nuožiūra) bei sukurti kelis user kintamuosius;
type UserType = {
  name: string;
  surname: string;
}

const user1: UserType = {
  name: "John",
  surname: "Doe",
}

const user2: UserType = {
  name: "Jane",
  surname: "Doe",
}

// 1. Savo nuožiūra sukurti IT projekto objekto tipą;
// 2. Objektas turi turėti property "projectType" kuris gali būt "IN_HOUSE" arba "OUTSOURCE"
// 5. Prie project tipo pridėt property "contributors" kuris masyvas susidedantis iš apsirašytu useriu;
type ProjectType = {
  projectName: string;
  projectType: "IN_HOUSE" | "OUTSOURCE";
  location: LocationType;
  contributors: UserType[];
}

// 6. Sukurti projekto kintamąjį bei panaudoti apsirašytą tipą;
const project1: ProjectType = {
  projectName: "Project A",
  projectType: "IN_HOUSE",
  location: {
    country: "Lithuania",
    city: "Vilnius",
    address: "Gedimino g. 123",
  },
  contributors: [user1],
}

const project2: ProjectType = {
  projectName: "Project B",
  projectType: "OUTSOURCE",
  location: {
    country: "United States",
    city: "New York",
    address: "Broadway 456",
  },
  contributors: [user1, user2],
}

// 7. Sukurti kintamąjį projects kuris masyvas susidedantis iš projektų;
const projects: ProjectType[] = [project1, project2];

// 8. Parašyt funkciją addItemToChart kuriai yra paduodamas prekės pavadinimas bei kainą. 
type ProductType = {
    title: string;
    price: number;
};

// 9. Sukuti produkto tipą. Produktui turi būt priskirtas produkto tipas pačioje funkcijoje; (Vygdyt destrukturizaciją);
const addProductToChart = ({title, price}: ProductType) => {
    console.log(title);
    console.log(price);
};

addProductToChart({price: 20, title: "IPhone"});

// 0. Susitept rankas su Omit, Pick, Partical. Išsibandyt šiuos pagalbinius tipus
// 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id.

// 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. // Naudot omit.
// 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. // Naudot pick
// 4. Atskirai apsirašyt knygos id tipą.
// 5. Apsirašyt automobilio tipą. Vėliau apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui.
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
// 7. Supushint kodą į gitbubą.
// 8. CAO TS 4, 5 tema;.


