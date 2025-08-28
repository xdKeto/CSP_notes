export default function ProfileName({ name, profesi = 'Tukang Batagor'}) {
  return (
    <div class="space-y-2 text-center sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg font-semibold text-black">{name}</p>
        <p class="font-medium text-gray-500">{profesi}</p>
      </div>
    </div>
  );
}
