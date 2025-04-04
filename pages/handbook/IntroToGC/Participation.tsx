// pages/handbook/IntroToGC/Participation.tsx
import HandbookLayout from "../../../components/handbook_components/handbook_layout";
import HandbookSection from "../../../components/handbook_components/handbook_section";

const Chapter1Subchapter3Page = () => {
  return (
    <HandbookLayout>
      <HandbookSection
        title="HB/S4 - Activity, & Participation"
        blocks={[
          {
            blockTitle: "HB/PB-26 - Being Present on Discord",
            blockContent: (
                <div>
                  <p>
                    GC members are not required to join or participate in the Discord, however it is encouraged because this is how information is conveyed to the playerbase.
                  </p>
                  <div className="mt-2">
                    <a
                      href="https://discord.com/invite/global-conflicts-635885194288562206"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      Join our Discord here
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ),
            buttonLabel: "Guide",
          },
          {
            blockTitle: "HB/PB-27 - New Guy Probaition",
            blockContent: (
              <div>
                <div className="ml-10">
                <ul className="list-disc pl-5">
                  <li>When a new user joins Global Conflicts, they are assigned the “New Guy” role. To earn membership, the user must participate in 4 weeks of play sessions.</li>
                  <li>During a user's probation, they will be subject to review by the staff team.</li>
                  <li>If a user’s general character isn’t seen as an ideal fit for the community, whether that be due to poor attitude, poor general conduct, inability to follow the chain of command, etc, then the staff also reserve the right to fail a user’s probation. The user will receive a 3 month ban, after which they can rejoin if they wish.</li>
                  <li>Once a failed probation ban has expired, the user will be given the new-guy role and will be expected to adhere to the same standards, and probation period as before. For each ban relating to a failed probation, the next ban will double in length over the previous. 3🢚6🢚12</li>
                </ul>
                </div>
              </div>
            ),
            buttonLabel: "Policy",
          },
          {
            blockTitle: "HB/PB-28 - Membership Status",
            blockContent: (
              <div>
              <div className="ml-10">
                  <ul className="list-disc pl-5">
                      <li><strong>New Guy:</strong> Newly joined user, subject to a probation period. </li>
                      
                      <li><strong>Member:</strong> A user that has played 4 sessions with GC.</li>

                      <li><strong>Staff:</strong> A member that holds a specific role on a community team. </li>

                  </ul>
              </div>
            </div>
          ),
            buttonLabel: "Policy",
          },
          {
            blockTitle: "HB/PB-29 - Voting",
            blockContent: (
                <div>
                    <p>Policy changes, and Code of Conduct violations are voted on through polls. Polls tallied via a weighted system based on the voters role. Polls are decided with simple majority.
                    </p>
                <div className="mt-4 ml-10">
                    <ul className="list-disc pl-5">
                        <li><strong>Members:</strong> the collective majority of members count as 1 vote. </li>
                        
                        <li><strong>Game Moderators:</strong> the collective majority of Game moderators count as 1 vote.</li>

                        <li><strong>Admins:</strong> each Admin's vote counts as 1 vote.</li>

                    </ul>
                </div>
              </div>
            ),
            buttonLabel: "Policy",
          },
          {
            blockTitle: "HB/PB-30 - Inactivity",
            blockContent: (
                <div>
                <div className="ml-10">
                    <ul className="list-disc pl-5">
                        <li><strong>Members:</strong> have no attendance requirements, a member is free to come and go as they please. </li>
                        
                        <li><strong>Staff:</strong> members are encouraged to resign from any held positions if a prolonged period of inactivity is to be expected, or if they are no longer interested in the position they hold.</li>

                        <li><strong>Admins:</strong> may remove staff members from their positions if they are inactive for prolonged periods of time. </li>

                    </ul>
                </div>
              </div>
            ),
            buttonLabel: "Policy",
          },
        ]}
      />
    </HandbookLayout>
  );
};

export default Chapter1Subchapter3Page;