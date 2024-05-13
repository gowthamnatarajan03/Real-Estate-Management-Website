import { Component, OnInit } from '@angular/core';
import { faFilter, faMagnifyingGlass, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit {

  heading:string = "List of Properties";
  plusicon = faPlusCircle;
  searchicon = faMagnifyingGlass;
  filtericon = faFilter;
  add:string = "New Property"
  propdesc:string = "Find properties for rent by selecting from the curated list of available properties, or by entering your search criteria below. If you have any queries feel free to contact, will help you find the perfect rental property!"
  propoverlaytext1:string = "Properties For Rent"
  propoverlaytext2:string = "Explore diverse range of rental properties tailored to your needs. Whether it's a cozy residential retreat, a bustling commercial space, or an industrial hub, find the perfect rental to fuel your aspirations. Unlock endless possibilities with curated selection of properties for rent."

  items1 = [
    {
      imageUrl1: "../assets/residential/res1.jpg",
      category1: "Residential Real Estate",
      title1: "Homemaker Grande",
      price1: "RS.210000",
      description: "Spacious dwellings crafted for families to create lasting memories, embracing the essence of home."
    }
  ];

  items2 = [
    
    {
      imageUrl2: "../assets/commercial/comm1.jpg",
      category2: "Commercial Real Estate",
      title2: "The Glass Grande Maison B",
      price2: "RS.50000",
      description: "Prime commercial properties that serve as catalysts for economic growth, attracting investment and driving prosperity in their surroundings."
    }
  ];

  items3 = [
    {
      imageUrl3: "../assets/industrial/ind1.jpg",
      category3: "Industrial Real Estate",
      title3: "La Grande Maison Certy C",
      price3: "RS.30000",
      description: "Industrial estates offering a conducive environment for innovation and growth, fostering collaboration among businesses."
    }
  ];

  items4 = [
    
    {
      imageUrl4: "../assets/residential/res2.jpg",
      category1: "Residential Real Estate",
      title4: "EcoStay D 45-T",
      price4: "RS.29995",
      description: "Spacious dwellings crafted for families to create lasting memories, embracing the essence of home."
    }
  ];

  items5 = [
    
    {
      imageUrl5: "../assets/residential/res3.jpg",
      category1: "Residential Real Estate",
      title5: "Greenwood Darf House 34 T",
      price5: "RS.210000",
      description: "Spacious dwellings crafted for families to create lasting memories, embracing the essence of home."
    }
  ];

  items6 = [
    
    {
      imageUrl6: "../assets/industrial/ind2.jpg",
      category3: "Industrial Real Estate",
      title6: "Ingko Sand Factory D45",
      price6: "RS.301500",
      description: "Industrial estates offering a conducive environment for innovation and growth, fostering collaboration among businesses."
    }
  ];

  items7 = [
    
    {
      imageUrl7: "../assets/commercial/comm2.jpg",
      category2: "Commercial Real Estate",
      title7: "Ingko Sand Factory D45",
      price7: "RS.200000",
      description: "Prime commercial properties that serve as catalysts for economic growth, attracting investment and driving prosperity in their surroundings."
    }
  ];

  items8 = [
    
    {
      imageUrl8: "../assets/land/lan1.jpg",
      category4: "Land Real Estate",
      title8: "Samp Land Fields",
      price8: "RS.200000",
      description: "Expansive parcels of land offering boundless potential for development, from residential communities to commercial projects."
    }
  ];

  items9 = [
    
    {
      imageUrl9: "../assets/residential/res4.jpg",
      category1: "Residential Real Estate",
      title9: "Shoebox Morty",
      price9: "RS.200000",
      description: "Spacious dwellings crafted for families to create lasting memories, embracing the essence of home."
    }
  ];

  items10 = [
    {
      imageUrl10: "../assets/land/lan2.jpg",
      category4: "Land Real Estate",
      title10: "Butuan 45",
      price10: "RS.200000",
      description: "Expansive parcels of land offering boundless potential for development, from residential communities to commercial projects."
    }
  ];

  filteredItems1: any[] = [];
  filteredItems2: any[] = [];
  filteredItems3: any[] = [];
  filteredItems4: any[] = [];
  filteredItems5: any[] = [];
  filteredItems6: any[] = [];
  filteredItems7: any[] = [];
  filteredItems8: any[] = [];
  filteredItems9: any[] = [];
  filteredItems10: any[] = [];

  searchTerm: string = '';
  
  activeFilter: string;
  showFilters: boolean = false;
  selectedCategories: string[] = [];

  constructor() {
    this.filteredItems1 = this.items1.flat();
    this.filteredItems2 = this.items2.flat();
    this.filteredItems3 = this.items3.flat();
    this.filteredItems4 = this.items4.flat();
    this.filteredItems5 = this.items5.flat();
    this.filteredItems6 = this.items6.flat();
    this.filteredItems7 = this.items7.flat();
    this.filteredItems8 = this.items8.flat();
    this.filteredItems9 = this.items9.flat();
    this.filteredItems10 = this.items10.flat();
this.activeFilter = 'category1';
   }

  ngOnInit(): void {
    this.filteredItems1 = this.items1;
    this.filteredItems2 = this.items2;
    this.filteredItems3 = this.items3;
    this.filteredItems4 = this.items4;
    this.filteredItems5 = this.items5;
    this.filteredItems6 = this.items6;
    this.filteredItems7 = this.items7;
    this.filteredItems8 = this.items8;
    this.filteredItems9 = this.items9;
    this.filteredItems10 = this.items10;
    
  }
  filterItems() {
    this.filteredItems1 = this.items1.filter(item =>
      item.title1.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
    this.filteredItems2 = this.items2.filter(item =>
      item.title2.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

this.filteredItems3 = this.items3.filter(item =>
  item.title3.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems4 = this.items4.filter(item =>
  item.title4.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems5 = this.items5.filter(item =>
  item.title5.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems6 = this.items6.filter(item =>
  item.title6.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems7 = this.items7.filter(item =>
  item.title7.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems8 = this.items8.filter(item =>
  item.title8.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems9 = this.items9.filter(item =>
  item.title9.toLowerCase().includes(this.searchTerm.toLowerCase())
);

this.filteredItems10 = this.items10.filter(item =>
  item.title10.toLowerCase().includes(this.searchTerm.toLowerCase())
);
}

onFilterChange(filter: string) {
switch (filter) {
  case 'category1':
    this.filteredItems1 = this.items1;
    this.filteredItems4 = this.items4;
    this.filteredItems5 = this.items5;
    this.filteredItems9 = this.items9;
    break;
  case 'category2':
    this.filteredItems2 = this.items2;
    this.filteredItems7 = this.items7;
    break;
  case 'category3':
    this.filteredItems3 = this.items3;
    this.filteredItems6 = this.items6;
    break;
  case 'category4':
    this.filteredItems8 = this.items8;
    this.filteredItems10 = this.items10;
    break;
  default:
    this.filteredItems1 = [];
    this.filteredItems2 = [];
    this.filteredItems3 = [];
    this.filteredItems4 = [];
    this.filteredItems5 = [];
    this.filteredItems6 = [];
    this.filteredItems7 = [];
    this.filteredItems8 = [];
    this.filteredItems9 = [];
    this.filteredItems10 = []
}
this.activeFilter = filter;
}

toggleFilters() {
this.showFilters = !this.showFilters;
}

onCheckboxChange(category: string) {
const index = this.selectedCategories.indexOf(category);
if (index === -1) {
  this.selectedCategories.push(category);
} else {
  this.selectedCategories.splice(index, 1);
}
}

isCategoryChecked(category: string): boolean {
return this.selectedCategories.includes(category);
}

applyFilters() {
if (this.selectedCategories.length === 0) {
  this.filteredItems1 = this.items1.flat();
    this.filteredItems2 = this.items2.flat();
    this.filteredItems3 = this.items3.flat();
    this.filteredItems4 = this.items4.flat();
    this.filteredItems5 = this.items5.flat();
    this.filteredItems6 = this.items6.flat();
    this.filteredItems7 = this.items7.flat();
    this.filteredItems8 = this.items8.flat();
    this.filteredItems9 = this.items9.flat();
    this.filteredItems10 = this.items10.flat();
} else {
  this.filteredItems1 = [];
  this.filteredItems2 = [];
  this.filteredItems3 = [];
  this.filteredItems4 = [];
  this.filteredItems5 = [];
  this.filteredItems6 = [];
  this.filteredItems7 = [];
  this.filteredItems8 = [];
  this.filteredItems9 = [];
  this.filteredItems10 = []
  this.selectedCategories.forEach(category => {
    switch (category) {
      case 'category1':
        this.filteredItems1 = this.filteredItems1.concat(this.items1);
        this.filteredItems4 = this.filteredItems4.concat(this.items4);
        this.filteredItems5 = this.filteredItems5.concat(this.items5);
        this.filteredItems9 = this.filteredItems9.concat(this.items9)
        break;
      case 'category2':
        this.filteredItems2 = this.filteredItems2.concat(this.items2);
        this.filteredItems7 = this.filteredItems7.concat(this.items7)
        break;
      case 'category3':
        this.filteredItems3 = this.filteredItems3.concat(this.items3);
        this.filteredItems6 = this.filteredItems6.concat(this.items6)
        break;
      case 'category4':
        this.filteredItems8 = this.filteredItems8.concat(this.items8);
        this.filteredItems10 = this.filteredItems10.concat(this.items10)
        break;
    }
  });
}

this.filteredItems1 = this.filteredItems1.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems2 = this.filteredItems2.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems3 = this.filteredItems3.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems4 = this.filteredItems4.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems5 = this.filteredItems5.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems6 = this.filteredItems6.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems7 = this.filteredItems7.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems8 = this.filteredItems8.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems9 = this.filteredItems9.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.filteredItems10 = this.filteredItems10.filter((card, index, self) =>
  index === self.findIndex((c) => (
    c.title === card.title && c.description === card.description
  ))
);
this.showFilters = false; 
}

cancelFilters() {
this.showFilters = false;
}

}