import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe('illustrated headquarters integration', () => {
  it('renders Gloob and places the playable star desk before the department hallway', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("HI!! I'M GLOOB!");
    expect(screen.getByRole('heading', { name: /Help Me Sort The Stars!/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /PICK A DEPARTMENT!/i })).toBeInTheDocument();
    const desk = document.getElementById('stardust');
    const hallway = document.getElementById('projects');
    expect(desk).not.toBeNull();
    expect(hallway).not.toBeNull();
    expect(Boolean(desk!.compareDocumentPosition(hallway!) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true);
  });

  it('does not award a star for booping; a correct chart selection earns the first placement', () => {
    vi.useFakeTimers();
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: /WATCH ME ORGANIZE!/i })[0]);
    act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByText(/STARS FILED: 0\/6/)).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: /BOOP GLOOB!/i })[0]);
    expect(screen.getByText(/STARS FILED: 0\/6/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Pip.*CROWN/i }));
    fireEvent.click(screen.getByRole('button', { name: /Cosmic Crown/i }));
    expect(screen.getByText(/STARS FILED: 1\/6/)).toBeInTheDocument();
  });
});
