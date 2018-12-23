import * as React from 'react';
import {ApoptoosiForm} from './ApoptoosiForm';
import {ApoptoosiList} from './ApoptoosiList';

export const ApoptoosiRegisterationPage: React.SFC = () => {
    return(
        <>
    <section id="Ilmoittautuminen" className="SignupForm">
        <ApoptoosiForm
          formFields={this.state.newRegisteration}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          />
      </section>
      <section className="RegisteredList">
      <ApoptoosiList
        registerations={this.state.registerations}
        loading={this.state.loading}
        />
      </section>
      </>
      );
}