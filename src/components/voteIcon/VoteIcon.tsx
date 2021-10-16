import { VoteIconContainer } from "./VoteIcon.styles";

export enum VoteType {
  UPVOTE,
  DOWNVOTE
}

export interface VoteIconProps {
  isDisabled: boolean;
  isUpdating: boolean;
  onVote: () => void;
  voteType: VoteType;
}

export const VoteIcon = ({
  onVote,
  isDisabled,
  isUpdating,
  voteType
}: VoteIconProps) => {
  return (
    <VoteIconContainer
      onClick={onVote}
      voteType={voteType}
      isDisabled={isDisabled}
      isUpdating={isUpdating}
    >
      <svg
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
      >
        <path
          d="M40.04 21.667h-9.4l3.378-10.976c.711-2.289-1.155-4.577-3.733-4.577-1.288 0-2.533.533-3.377 1.444l-13.02 14.11H5v22.218h32.062c2.355 0 4.4-1.488 4.866-3.577l2.977-13.332c.6-2.755-1.733-5.31-4.865-5.31ZM13.888 41.664H7.222V23.89h6.666v17.775Zm28.84-15.175L39.751 39.82c-.223 1.067-1.356 1.844-2.689 1.844H16.11v-19.13L28.552 9.069c.422-.467 1.067-.733 1.733-.733.578 0 1.111.244 1.4.666.156.222.333.578.2 1.045l-3.377 10.976-.889 2.866h12.398c.911 0 1.778.378 2.289 1.022.289.333.578.889.422 1.578Z"
          fill={voteType === VoteType.UPVOTE ? "green" : "red"}
          fillRule="nonzero"
        />
      </svg>
    </VoteIconContainer>
  );
};
