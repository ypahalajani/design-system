import * as React from 'react';
import { Card, Navigation } from '@/index';
import { action } from '@storybook/addon-actions';
import { Menu } from '../../Navigation';

export const horizontal = () => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
    },
    {
      name: 'menu_2',
      label: 'Menu 2'
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu: Menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();

    setActive(menu);
  };

  return (
    <Card style={{ height: '200px', background: 'var(--secondary-lightest' }}>
      <div
        style={{
          background: 'white',
          padding: 'var(--spacing-m)',
          borderTop: 'var(--border)',
          borderBottom: 'var(--border)'
        }}
      >
        <Navigation
          data={data}
          active={active}
          onClick={onClickHandler}
        />
      </div>
    </Card >
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'event',
    },
    {
      name: 'menu_2',
      label: 'Menu 2'
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true
    }
  ];

  const [active, setActive] = React.useState({
    name: 'menu_1'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <Card style={{ height: '200px', background: 'var(--secondary-lightest' }}>
      <div
        style={{
          background: 'white',
          padding: 'var(--spacing-m)',
          borderTop: 'var(--border)',
          borderBottom: 'var(--border)'
        }}
      >
        <Navigation
          data={data}
          active={active}
          onClick={onClickHandler}
        />
      </div>
    </Card >
  );
}`;

export default {
  title: 'Organisms|Navigation/Variants',
  component: Navigation,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
