import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
//! https://transform.tools/svg-to-react-native
export const CompassIcon = (color: string) => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.135 13C.135 5.904 5.905.135 13 .135c7.096 0 12.865 5.77 12.865 12.865 0 7.096-5.77 12.865-12.865 12.865C5.904 25.865.135 20.095.135 13zm16.386 2.274l3.087-7.095c.488-1.137-.65-2.275-1.787-1.787l-7.095 3.087a2.432 2.432 0 00-1.247 1.246l-3.06 7.122c-.515 1.111.65 2.248 1.76 1.76l7.096-3.086a2.433 2.433 0 001.246-1.247zM13 14.76a1.76 1.76 0 100-3.52 1.76 1.76 0 000 3.52z"
        fill={color}
      />
    </Svg>
  );
};
export const WalletIcon = (color: string) => {
  return (
    <Svg width={24} height={22} viewBox="0 0 24 22" fill="none">
      <Path
        d="M.49 9.81c-.967-.81-.407-2.355.841-2.427l6.162-.417c.356-.025.688-.246.84-.589L10.677.86C10.931.294 11.466 0 12 0c.535 0 1.07.294 1.324.859l2.342 5.518c.128.32.46.54.841.589l6.162.417c1.247.073 1.808 1.619.84 2.427l-4.838 3.803a.957.957 0 00-.33.956l1.45 5.739a1.379 1.379 0 01-2.087 1.472l-5.271-3.115a.954.954 0 00-1.019 0l-5.22 3.115c-.229.147-.51.22-.764.22-.84 0-1.604-.76-1.35-1.692l1.452-5.74c.076-.342-.026-.71-.332-.932L.49 9.811z"
        fill={color}
      />
    </Svg>
  );
};
