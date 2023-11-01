<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';
=======
>>>>>>> 17ce6d835f506711f4ed1663ecf21f38804bd1d1
import { render } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';

describe('MyComponent', () => {
<<<<<<< HEAD
  it('should render', () => { 
=======
  test('should render', () => {
>>>>>>> 17ce6d835f506711f4ed1663ecf21f38804bd1d1
    const { getByText } = render(MyComponent, { props: { name: 'World' } });

    expect(getByText('Hello World')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 17ce6d835f506711f4ed1663ecf21f38804bd1d1
