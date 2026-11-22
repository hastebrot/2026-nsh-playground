import { effect, mount, signal, Text, View } from "nsh";

function App() {
  const count = signal(0);
  const json = signal({ name: "John", age: 30 });
  effect(() => {
    count();
    json.update((j) => ({ ...j, age: j.age + 1 }));
  });
  return (
    <View class="flex-1 items-center justify-center gap-4 bg-background pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]">
      <Text class="text-xl text-foreground">{JSON.stringify(json())}</Text>
      <View class="items-center gap-4 rounded-(--radius) border border-border bg-card p-6">
        <Text class="text-3xl font-semibold text-foreground">{count()}</Text>
        <View
          class="rounded-(--radius) bg-primary px-5 py-3 active:bg-primary/90"
          onPress={() => count.update((c) => c + 1)}
          role="button"
        >
          <Text class="text-lg text-primary-foreground">Tap</Text>
        </View>
        <View
          class="rounded-(--radius) border border-border bg-background px-5 py-3 active:bg-accent"
          onPress={() => count.set(0)}
          role="button"
        >
          <Text class="text-lg text-foreground">Reset Counter</Text>
        </View>
      </View>
    </View>
  );
}

mount(App);
