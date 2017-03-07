import { Component } from '@angular/core';


@Component({
  selector: 'createtrans',
  template: `
 
    <div class="col-md-12 content-area">
	  <h2>Create Transaction</h2>
	  <form>
	  <div class="col-md-6">
		<div class="form-group">
		  <label for="email">From Account</label>
		  <select class="form-control">
			<option>one</option>
			<option>two</option>
			<option>thre</option>
		  </select>
		</div>
		<div class="form-group">
		<label for="amount">Amount in Dollar</label>
		<input type="number" class="form-control" id="amount"  placeholder="Enter Amount">
    
		</div>
	  </div>
	  <div class="col-md-6">
		<div class="form-group">
		  <label for="email">To Account</label>
		  <select class="form-control">
			<option>one</option>
			<option>two</option>
			<option>thre</option>
		  </select>
		</div>
		<div class="form-group">
		  <label for="desc">Description:</label>
		  <textarea class="form-control" rows="3" id="desc"></textarea>
		</div>
	  </div>
	  <div class="col-md-12">
		<div class="pull-right">
		<button class="btn btn-default">Submit</button>
		<button class="btn btn-default">Cancel</button>
		</div>
	  </div>
	  </form>
	  </div>
  `
})
export class CreateTransactionComponent {
 
}

