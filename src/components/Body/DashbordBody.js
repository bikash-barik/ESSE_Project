import React, { Component } from "react";

export default function DashbordBody(props){

    return (
      <div>
        <div
          class="d-flex alert shadow p-2 mb-3 bg-light rounded alert-dismissible fade show"
          role="alert"
        >
         <div class="d-flex align-items-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="currentColor"
            class="bi text-success bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d={props.icon} />
          </svg>
          <div>
            <h5 className="text-success">{props.Heading}</h5>
            {props.Title}
          </div>

          
        </div>

          <button
            type="button"
            class="btn-close align-items-center mt-2"
            data-bs-dismiss="alert"
            aria-label=""
          ></button>
        </div>

       
      </div>
    );
  }

