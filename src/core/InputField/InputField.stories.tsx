import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { InputField } from '../InputField';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
storiesOf('InputField', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
        />
      </div>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="password"
          disabled={false}
          startIcons={[]}
          endIcons={[<Visibility />, <VisibilityOff />]}
          value="Input with password type"
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="Start"
          type="text"
          value="Input with Start adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="End"
          type="text"
          value="Input with End adornment"
          disabled={false}
          startIcons={[]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="StartEnd"
          type="text"
          value="Input with both adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          value="Input with error type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          value="Input with success type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
          value="disabled text"
        />
      </div>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
        />
      </div>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="password"
          disabled={false}
          startIcons={[]}
          endIcons={[<Visibility />, <VisibilityOff />]}
          value="Input with password type"
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="Start"
          type="text"
          value="Input with Start adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="End"
          type="text"
          value="Input with End adornment"
          disabled={false}
          startIcons={[]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="StartEnd"
          type="text"
          value="Input with both adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          value="Input with error type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          value="Input with success type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
          value="disabled text"
        />
      </div>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
        />
      </div>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="password"
          disabled={false}
          startIcons={[]}
          endIcons={[<Visibility />, <VisibilityOff />]}
          value="Input with password type"
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="Start"
          type="text"
          value="Input with Start adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="End"
          type="text"
          value="Input with End adornment"
          disabled={false}
          startIcons={[]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="StartEnd"
          type="text"
          value="Input with both adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          value="Input with error type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          value="Input with success type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
          value="disabled text"
        />
      </div>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
        />
      </div>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="password"
          disabled={false}
          startIcons={[]}
          endIcons={[<Visibility />, <VisibilityOff />]}
          value="Input with password type"
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="Start"
          type="text"
          value="Input with Start adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="End"
          type="text"
          value="Input with End adornment"
          disabled={false}
          startIcons={[]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="StartEnd"
          type="text"
          value="Input with both adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          value="Input with error type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          value="Input with success type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
          value="disabled text"
        />
      </div>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
        />
      </div>
      <div style={{ display: 'grid', gridGap: '20px' }}>
        <InputField
          label="primary"
          variant="primary"
          type="password"
          disabled={false}
          startIcons={[]}
          endIcons={[<Visibility />, <VisibilityOff />]}
          value="Input with password type"
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="Start"
          type="text"
          value="Input with Start adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="End"
          type="text"
          value="Input with End adornment"
          disabled={false}
          startIcons={[]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="primary"
          variant="primary"
          adornment="StartEnd"
          type="text"
          value="Input with both adornment"
          disabled={false}
          startIcons={[<AccountCircle />]}
          endIcons={[<AccountCircle />]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="error"
          variant="error"
          type="text"
          value="Input with error type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="success"
          variant="success"
          type="text"
          value="Input with success type"
          disabled={false}
          endIcons={[]}
          startIcons={[]}
          onChange={(e) => e.target.value}
        />
        <InputField
          label="disabled"
          variant="primary"
          type="text"
          disabled={true}
          endIcons={[]}
          startIcons={[]}
          value="disabled text"
        />
      </div>
    </ThemedBackground>
  ));
