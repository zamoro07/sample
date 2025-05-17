import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-add-edit',
  templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {
  id: number | null = null;
  request: {
    type: string;
    items: { name: string; quantity: number }[];
  } = {
    type: 'Equipment',
    items: []
  };

  errorMessage = '';

  ngOnInit() {
    if (this.id) {
      // Sample edit data
      this.request = {
        type: 'Equipment',
        items: [
          { name: 'Printer', quantity: 1 },
          { name: 'Ink', quantity: 4 }
        ]
      };
    }
  }

  addItem() {
    this.request.items.push({ name: '', quantity: 1 });
  }

  removeItem(index: number) {
    this.request.items.splice(index, 1);
  }

  save() {
    if (!this.request.type || this.request.items.length === 0) {
      this.errorMessage = 'Please fill out all fields and add at least one item.';
      return;
    }

    console.log('Saved request:', this.request);
  }

  cancel() {
    console.log('Cancelled request operation');
  }
}
