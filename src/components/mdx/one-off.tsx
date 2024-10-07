/**
 *
 * Components in this file are one-off components used in several blog posts
 * Each component has the name of the posts that use it above it
 *
 */

/**
 * what-is-a-file
 */
export function Partitions() {
  return (
    <div
      className="flex flex-col bg-mantle font-mono bleed select-none"
      role="img"
      aria-label="/dev/sda disk being partitioned into three disc partitions"
    >
      <span className="mb-4 ml-2 flex justify-center border-b-2 border-dotted border-surface0 pb-2 text-subtext0">
        /dev/sda
      </span>

      <div className="flex gap-x-2 text-nowrap border-2 border-mantle text-2xs *:flex *:h-max *:w-10 *:flex-col *:items-center *:justify-center *:rounded-lg *:border-2 *:bg-mantle *:py-2 tiny:text-xs sm:text-sm">
        <div className="grow border-green text-green">
          <span>/dev/sda1</span>
          <span className="text-subtext1">512M</span>
        </div>
        <div className="grow-[3] border-yellow text-yellow">
          <span>/dev/sda2</span>
          <span className="text-subtext1">4G</span>
        </div>
        <div className="grow-[5] border-red text-red">
          <span>/dev/sda3</span>
          <span className="text-subtext1">945.4G</span>
        </div>
      </div>
    </div>
  );
}
