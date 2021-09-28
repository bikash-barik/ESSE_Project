import React, { Component } from "react";

export default class SelleradddressRoght extends Component {
  render() {
    return (
      <div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            COUNTRY
          </label>
          <div class="col-sm-12 col-md-4">
            <select id="inputState" class="form-select form-select-lg">
              <option selected>SELECT COUNTRY...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            NAME
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            PHONE NO.
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="MOBILE NUMBER"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            DR.NO
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="FLAT NO HOUSE NUMBER"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            PIN CODE
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="SELECT COUNTRY"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            AREA
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="ENTER YOUR AREA"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            LAND MARK
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="ENTER LANDMARK"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            TOWN/CITY
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="ENTER YOUR TOWN/CITY"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            STATE/REGION
          </label>
          <div class="col-sm-12 col-md-4">
            <select id="inputState" class="form-select form-select-lg">
              <option selected>SELECT STATE...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        {/* <div class="col-12 d-sm-inline-flex jystify-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineFormCheck"
            />
            <label class="form-check-label" for="inlineFormCheck">
              USE AS MY DEFAULT ADDRESS
            </label>
          </div>
        

        <div>
          <button type="submit" class="btn btn-primary">
            CANCLE
          </button>
          <button type="submit" class="btn btn-primary">
            SAVE CHANGES
          </button>
        </div>
        </div> */}
      </div>
    );
  }
}
