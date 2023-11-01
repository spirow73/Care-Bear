import { render } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';

describe('MyComponent', () => {
  test('should render', () => {
    const { getByText } = render(MyComponent, { props: { name: 'World' } });

    expect(getByText('Hello World')).toBeInTheDocument();
  });
});