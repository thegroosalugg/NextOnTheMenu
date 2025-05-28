'use client';
import styles from './MessagesList.module.css';
import type { Message } from '@/lib/messages';
import { useOptimistic } from 'react';

export default function MessagesList({
    msgs, // action only used in /action route of demo. /db && /api skip this demo
  action = async (id: string) => console.log('liked msg ID:', id),
}: {
     msgs: Message[];
  action?: (id: string) => Promise<void>;
}) {
  // useOptimisitc(originalValue, updateFn(prevState, customArgs))
  const [optimisticMsgs, updateOptimisticMsgs] = useOptimistic(msgs, (prevMsgs, msgId) =>
    prevMsgs.map((msg) =>
      msg.id === msgId // SQL doesn't accept boolean. 0 | 1 represents false | true
        ? { ...msg, liked: (msg.liked === 0 ? 1 : 0) as 0 | 1 } // toggle liked
        : msg // return msg for all non matching cases
    )
  );

  if (optimisticMsgs.length === 0) {
    return <p>No messages found</p>;
  }

  // wrap useOptimisticFn and server action in new function
  async function clickHandler(id: string) {
    updateOptimisticMsgs(id);
    await action(id);
  }

  return (
    <ol className={styles['messages-list']}>
      {optimisticMsgs.map(({ id, text, liked }, i) => (
        <li key={id}>
          <span>{i + 1}</span>
          <p>{text}</p>
          {/* useOptimistic requires a server action - wrap in form with submit button */}
          {/* bind is required for form actions to pass args, as opposed to onClick: () => fn(arg)
          1st arg: what THIS represents (not required here), then pass custom args thereafter */}
          <form action={clickHandler.bind(null, id)}>
            <button>
              <svg
                       viewBox='0 0 24 24'
                         width='24'
                        height='24'
                          fill={liked > 0 ? 'currentColor' : 'none'}
                        stroke='currentColor'
                   strokeWidth='2'
                 strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z' />
              </svg>
            </button>
          </form>
        </li>
      ))}
    </ol>
  );
}
